# Post an plain text

## Start connection

`nc localhost 3000 > out`
`tail -f out`

## Create upload url

```
POST /uploads HTTP/1.1
Host: localhost:3000
Content-Length: 0
Upload-Length: 21
Tus-Resumable: 1.0.0
Upload-Metadata: filename ZmlsZS50eHQ=

```

## Upload

```
PATCH <Upload Location> HTTP/1.1
Host: localhost:3000
Content-Length: 12
Tus-Resumable: 1.0.0
Origin: http://localhost:3000
Upload-Offset: 0
Content-Type: application/offset+octet-stream

Hello World!
```

## Check progress

```
HEAD <Upload Location> HTTP/1.1
Host: localhost:3000
Content-Length: 0
Tus-Resumable: 1.0.0

```

## Continue upload

```
PATCH <Upload Location> HTTP/1.1
Host: localhost:3000
Content-Length: 9
Tus-Resumable: 1.0.0
Origin: http://localhost:3000
Upload-Offset: 12
Content-Type: application/offset+octet-stream

By Sunday
```