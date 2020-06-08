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

Mailtrap
--------

To inspect e-mails send by the application you can open mailtrap:

http://localhost:8025/

username: mailtrap<br> 
password: mailtrap
