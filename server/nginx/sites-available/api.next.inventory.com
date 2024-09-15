server {
        listen 80;
        listen [::]:80;

        root /var/www/api.next.inventory.com/public;
        index index.php index.html index.htm;

        server_name api.next.inventory.com www.api.next.inventory.com;

        location / {
                try_files $uri $uri/ =404;
        }
}
