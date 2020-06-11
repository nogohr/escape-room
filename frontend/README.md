ESMS Backend
============

## Installation

### Prerequisites

* [Docker for Mac](https://docs.docker.com/docker-for-mac/)
* [Docker Compose](https://docs.docker.com/compose/install/)

If you use Homebrew you can run:

```sh
brew cask install docker
brew install docker-compose
```

### Installation

1. Install

    ```bash
    make install
    ```

Usage
-----

1. Start services

    ```
    make up
    ```

2. Open website

    ```shell
    open http://localhost:8000
    ```

Troubleshooting
---------------

1. Node Sass could not find a binding for your current environment: Linux 64-bit with Node.js 10.x

    ```sh
    make cli
    npm rebuild node-sass
    ```
