export class Response<T> {
  message: string;
  data: T;

  constructor(message: string, data?: T) {
    this.message = message;
    this.data = data;
  }
}

export const ResponseOK = <T>(data?: T): Response<T> => {
  return new Response('ok', data);
};
