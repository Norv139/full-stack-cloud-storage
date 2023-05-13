import { Injectable } from '@nestjs/common';

const element_html = '<p>test api: <a href="/swagger"><button>swagger</button></a></p>'

@Injectable()
export class AppService {
  getHello(): string {
    return element_html;
  }
}
