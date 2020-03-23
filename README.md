ESMS: Escape Room Managment System
==================================

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

1. Clone the repository

    ```bash
    git clone git@github.com:nogohr/escape-room.git && cd escape-room
    ```

2. Install

    ```bash
    make install
    ```

Usage
-----

1. Start services

    ```
    make up
    ```

Documentation
-------------

Fronted service: [frontend/README.md](frontend/README.md)<br>
Backend service: [backend/README.md](backend/README.md)

