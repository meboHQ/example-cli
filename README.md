<p align="center">
  <img src="https://mebohq.github.io/docs/data/logo.png"/>
</p>

## Commnad-line integration example
Implements a simple resize image action and hello world action which are available through command-line

## Requirements
- Node 8 or greater

## Running examples:
```
git clone https://github.com/meboHQ/example-cli.git
cd example-cli
npm install
# listing actions:
node . --cli

# executing actions:
node . --cli hello --help
node . --cli hello "Ola mundo!"
node . --cli resizeImage --help
node . --cli resizeImage --width=50 --height=50 data/logo.png > /tmp/logoTarget.png
```

## Licensing
Mebo is free software; you can redistribute it and/or modify it under the terms of the MIT License
