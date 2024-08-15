default:
    just -l

b:
    deno task build
    
s:
    deno task start

p:
    deno task preview