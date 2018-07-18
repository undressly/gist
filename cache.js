//Кэш для .htaccess

<FilesMatch ".(flv|gif|jpg|jpeg|png|ico|swf|js|css|pdf)$">
  Header set Cache-Control "max-age=2592000"
</FilesMatch>

<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresDefault "access plus 1 month"

    ExpiresByType image/flv "access plus 2 months"
    ExpiresByType image/gif "access plus 2 months"
    ExpiresByType image/jpg "access plus 2 months"
    ExpiresByType image/jpeg "access plus 2 months"
    ExpiresByType image/png "access plus 2 months"
    ExpiresByType image/ico "access plus 2 months"
    ExpiresByType image/swf "access plus 2 months"
    ExpiresByType image/js "access plus 2 months"
    ExpiresByType image/css "access plus 2 months"
    ExpiresByType image/pdf "access plus 2 months"
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE application/xml application/javascript application/x-javascript text/html text/javascript text/css
</IfModule>