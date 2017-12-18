# ionic-weather
Ionic Weather App - Bu application shunchaki ionic komponentlari tezligini android tekshirish uchun qilingan.
- Android - https://play.google.com/store/apps/details?id=uz.shoxabbos.weather

## Urnatish

* Repozetoriyani klon qilib oling

* Ionic, cordova va node_modules larni urnatish uchun pasdagi komanda

    ```bash
    $ npm uninstall -g ionic cordova
    $ npm install -g ionic cordova
    $ npm install
    $ npm install --only=dev  
    ```
* Ob havo API tokenini olib [DarkSky](https://darksky.net)
  * API_KEY ni o'zgartiring `src/providers/constants.ts`
  ```js
  export const FORECAST_CONFIG = {
    API_ENDPOINT: 'https://api.darksky.net/forecast/',
    API_KEY: '9bb59ff3063ac4930fc96890570b0c6f'
  };
  ```
* Google tokenini olish [Google Developers Console dan](https://console.developers.google.com/apis/credentials)
  * va uzgartirish `src/index.html`
  ```html
  <script src="https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyAZL0jdvdtBV_DmzLZ8yW53GHnhlRrbIAY&libraries=places">
  </script>
  ```

## Ishga tushirish

#### Browser
```bash
    # iOS 
    ionic serve --platform ios
    # Android
    ionic serve --platform android
    # All Platforms(iOS, Android and Windows)
    ionic serve --lab
```

### Android

```bash
    $ ionic cordova platform add android
    $ ionic cordova build android --prod
    $ ionic cordova run android --prod
```

### iOS
```bash
    $ ionic cordova platform add ios
    $ ionic cordova build ios --prod
```    
    Run using XCode
    
### Ionic resurslarini generate qilish
Run post_install script
```bash
    $ ./post_install.sh
```    
   

## License
ionic-mosum is available under the MIT license. See the LICENSE file for more info.
