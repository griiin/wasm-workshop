#!/usr/bin/python
import SimpleHTTPServer
import SocketServer
import os

PORT = 5000

os.chdir('dist')

class Handler(SimpleHTTPServer.SimpleHTTPRequestHandler):
  pass

#https://github.com/mdn/webassembly-examples/issues/5
Handler.extensions_map['.wasm'] = 'application/wasm'

httpd = SocketServer.TCPServer(("", PORT), Handler)

print "serving at port", PORT
httpd.serve_forever()
