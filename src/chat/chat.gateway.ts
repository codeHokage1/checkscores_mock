import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({cors: {origin: '*'}})
export class ChatGateway {
  @WebSocketServer() server: Server;

  handleConnection(client: Socket) {
    console.log('Client connected:', client.id);
    client.emit('connected', { message: 'Welcome!' });
  }
  handleDisconnect(client: Socket) {
    console.log('Client disconnected:', client.id);
    client.emit('disconnected', { message: 'Goodbye!' });   
  }

  // Handling incoming chat messages
  @SubscribeMessage('message')
  handleMessage(
    @MessageBody() message: string,
    @ConnectedSocket() client: Socket,
  ) {
    console.log(`Message received from ${client.id}: ${message}`);

    // Broadcast message to all connected clients
    this.server.emit('message', {
      clientId: client.id,
      message,
    });
  }
}
