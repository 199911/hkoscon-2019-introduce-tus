# Node.js stream demo

## Start server

`yarn stream`

## Start connection

`nc localhost 8080 > stream.out`

## Monitor server response

`tail -f stream.out`

## Send HTTP request

```
POST / HTTP/1.1
Host: localhost:8080
Content-Length: 12

Hello World!
```
