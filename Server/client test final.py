import socket

client_sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client_sock.connect(('10.106.3.30', 42069))

while True:
    message = input()
    if message == 'exit':
        client_sock.close()
        break
    else:
        client_sock.send((message).encode('utf8'))
        data = client_sock.recv(1024).decode("utf8")
        print('Received', repr(data))