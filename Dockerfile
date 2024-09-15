# FROM php AS base

# WORKDIR /var/www/api.next.inventory.com/public
# #RUN docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath
# # Install Composer
# COPY --from=composer:latest /usr/bin/composer /usr/bin/composer


# COPY . .

# RUN composer install --no-dev --optimize-autoloader

# FROM nginx:alpine

# RUN addgroup -g 1000 nginx-user && \
#     adduser -D -u 1000 -G nginx-user nginx-user


# COPY --from=base /var/www/api.next.inventory.com/public /var/www/api.next.inventory.com/public

# #RUN chown -R $USER:$USER /var/www/api.next.inventory.com/laravel

# RUN chown -R nginx-user:nginx-user /var/www/api.next.inventory.com/public

# RUN chmod -R 755 /var/www/api.next.inventory.com

# COPY ./nginx/sites-available/api.next.inventory.com /etc/nginx/sites-available/
# COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# # Crear el directorio /etc/nginx/sites-enabled si no existe y luego crear el enlace simbólico
# RUN mkdir -p /etc/nginx/sites-enabled/ && \
#     ln -s /etc/nginx/sites-available/api.next.inventory.com /etc/nginx/sites-enabled/



# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]


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