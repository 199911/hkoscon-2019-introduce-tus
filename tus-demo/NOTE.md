# TUS demo

## Setup

### Start server

`yarn tus`

### Start connection

`nc localhost 3000 >> tus.out`

### Monitor server response

`tail -f tus.out`

## Resumable upload

### Get upload location

```
POST /uploads HTTP/1.1
Host: localhost:3000
Content-Length: 0
Tus-Resumable: 1.0.0
Upload-Length: 22

```

### Upload part of file

```
PATCH <Upload Location> HTTP/1.1
Host: localhost:3000
Content-Type: application/offset+octet-stream
Content-Length: 13
Tus-Resumable: 1.0.0
Upload-Offset: 0

Hello World!
```

### Check progress

```
HEAD <Upload Location> HTTP/1.1
Host: localhost:3000
Content-Length: 0
Tus-Resumable: 1.0.0

```

### Continue upload

```
PATCH <Upload Location> HTTP/1.1
Host: localhost:3000
Content-Type: application/offset+octet-stream
Content-Length: 9
Tus-Resumable: 1.0.0
Upload-Offset: 13

By Sunday
```