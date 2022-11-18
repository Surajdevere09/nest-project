import { Logger } from '@nestjs/common';
import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WsResponse,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
  MessageBody,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway(8001, { cors: '*' })
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private logger: Logger = new Logger('AppGateway');
  afterInit(server: Server) {
    this.logger.log('Initialized');
    // throw new Error('Method not implemented.');
  }
  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected ${client.id} `);

    // throw new Error('Method not implemented.');
  }
  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected ${client.id} `);

    // throw new Error('Method not implemented.');
  }
  @WebSocketServer()
  server;
  @SubscribeMessage('msgToServer')
  handleMessage(@MessageBody() message: string): void {
    console.log('message:', message);
    this.server.emit('msgToServer', message);
  }
  // handleMessage(client: Socket, payload: string): WsResponse<string> {
  //   return { event: 'msgToClient', data: payload };
  // }
  // handleMessage(client: Socket, payload: string): void {
  //   client.emit('msgToClient', payload);
  // }
}
