FROM ubuntu as base

# Install PHP
RUN apt-get update && apt-get install -y php php-cli php-fpm php-mysql php-mbstring php-xml php-curl php-zip php-gd php-bcmath php-redis php-memcached php-imagick php-intl php-ldap php-soap php-xmlrpc php-xsl php-pear php-dev

# Install Composer
RUN apt-get install -y curl unzip git
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

RUN apt-get update \
    && apt-get install -y --no-install-recommends gnupg2 ca-certificates git-core curl zip unzip \
                                                  rsync vim-tiny htop sqlite3 nginx supervisor cron \
    && ln -sf /usr/bin/vim.tiny /etc/alternatives/vim \
    && ln -sf /etc/alternatives/vim /usr/bin/vim \
    && echo "deb http://ppa.launchpad.net/ondrej/php/ubuntu jammy main" > /etc/apt/sources.list.d/ondrej-ubuntu-php-focal.list \
    && apt-get update \
    && apt-get -y --no-install-recommends install $(cat /tmp/php-packages.txt) \
    && ln -sf /usr/sbin/php-fpm${PHP_VERSION} /usr/sbin/php-fpm \
    && mkdir -p /var/www/html/public && echo "index" > /var/www/html/public/index.php \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]