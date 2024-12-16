Socket.io enables real-time, bidirectional and event based communication

# socket server

send event to client/user = io
to send every client = io.emit
to send one client = io.to(socketId).emit
take event from client = socket.on

# client always use socket

send event to server = socket.emit
take event from server = socket.on
