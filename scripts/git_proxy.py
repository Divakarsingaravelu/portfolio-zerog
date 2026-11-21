import socket
import threading
import sys

def forward(src, dst):
    try:
        while True:
            data = src.recv(16384)
            if not data:
                break
            dst.sendall(data)
    except Exception:
        pass
    finally:
        try:
            src.close()
        except Exception:
            pass
        try:
            dst.close()
        except Exception:
            pass

def handle_client(client_sock):
    try:
        req = b''
        while b'\r\n\r\n' not in req:
            chunk = client_sock.recv(4096)
            if not chunk:
                break
            req += chunk
        
        # CONNECT github.com:443 HTTP/1.1
        lines = req.decode('latin1', errors='ignore').split('\r\n')
        if not lines or not lines[0].startswith('CONNECT'):
            client_sock.close()
            return
        
        # Use known working GitHub IP or resolve
        github_ips = ['20.207.73.82', '140.82.112.4', '140.82.113.4', '140.82.114.4']
        remote_sock = None
        for ip in github_ips:
            try:
                s = socket.create_connection((ip, 443), timeout=5)
                remote_sock = s
                break
            except Exception:
                continue
        
        if not remote_sock:
            client_sock.sendall(b'HTTP/1.1 502 Bad Gateway\r\n\r\n')
            client_sock.close()
            return
            
        client_sock.sendall(b'HTTP/1.1 200 Connection Established\r\n\r\n')
        
        t1 = threading.Thread(target=forward, args=(client_sock, remote_sock), daemon=True)
        t2 = threading.Thread(target=forward, args=(remote_sock, client_sock), daemon=True)
        t1.start()
        t2.start()
        t1.join()
        t2.join()
    except Exception:
        try:
            client_sock.close()
        except Exception:
            pass

def main():
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    server.bind(('127.0.0.1', 8999))
    server.listen(10)
    print("Proxy listening on 127.0.0.1:8999", flush=True)
    while True:
        try:
            client, _ = server.accept()
            threading.Thread(target=handle_client, args=(client,), daemon=True).start()
        except KeyboardInterrupt:
            break
        except Exception:
            pass

if __name__ == '__main__':
    main()
