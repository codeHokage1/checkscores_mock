import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({cors: {origin: '*'}})
export class ChatGateway {
  @WebSocketServer() server: Server;

  handleConnection(client: Socket) {
    console.log('Client connected:', client.id);
    client.emit('connected', { message: 'Welcome!' });
    client.broadcast.emit('connected', { message: `${client.id} has joined the chat` });
  }
  
  handleDisconnect(client: Socket) {
    console.log('Client disconnected:', client.id);
    client.broadcast.emit('disconnected', { message: `${client.id} has left the chat` });
  }

  // Handling incoming chat messages
  @SubscribeMessage('message')
  handleMessage(
    @MessageBody() message: string,
    @ConnectedSocket() client: Socket,
  ) {
    console.log(`Message received from ${client.id}: ${message}`);

    // Broadcast message to all connected clients, including the sender
    this.server.emit('message', {
      clientId: client.id,
      message,
    });
  }
}
