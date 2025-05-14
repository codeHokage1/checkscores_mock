import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Checkscore X Farhan</title>
        <style>
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f4f4f9;
            font-family: monospace;
            text-align: center;
          }

          .container {
            background-color: #ffffff;
            padding: 20px 40px;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            max-width: 550px;
          }

          h2 {
            font-size: 1.5rem;
            margin-bottom: 25px;
          }

          p {
            font-size: 1rem;
            margin: 10px 0;
          }

          a {
            color: #007bff;
            text-decoration: none;
          }

          a:hover {
            text-decoration: underline;
          }

          small {
            display: block;
            margin-top: 30px;
            color: #555;
            font-size: 0.9rem;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Checkscore NestJS Dev Assessment</h2>

          <p>To see the API documentation, please visit the <a href="https://documenter.getpostman.com/view/23438041/2sB2qUo5CC" target="_blank">Postman Doc</a></p>
          <p>To open the chat page, please visit the <a href="http://localhost:3000/chat.html" target="_blank">Chat Page</a></p>
          <p>See the full Github repository at <a href="https://github.com/codeHokage1/checkscores_mock" target="_blank">GitHub</a></p>
          
          <small>Built by Farhan Sodiq</small>
        </div>
      </body>
      </html>
    `;
  }
}
