# Default MusicMap Configuration Loader

Usage:

```javascript
var config = require('musicmap-config')(__dirname);
```

Loads configs from three locations:

```
# Application defaults
/path/to/application/config/musicmap

# Global defaults
/etc/musicmap

# Server specific configurations
/usr/local/etc/musicmap
```
