<p align="center">
  <img width="100" src="https://raw.githubusercontent.com/EOussama/firemitt/main/assets/firemitt.svg">
</p>

<h1 align="center">Firemitt</h1>
<p align="center">Fireguards are hot, but not enough to burn. As long as you got your mitts on.</p>

<p align="center">
  <img src="https://github.com/EOussama/firemitt/actions/workflows/doc.yml/badge.svg" />
  <img src="https://github.com/EOussama/firemitt/actions/workflows/test.yml/badge.svg" />
  <img src="https://github.com/EOussama/firemitt/actions/workflows/publish.yml/badge.svg" />
</p>

## Description
Firemitt is an intermediate package designed to simplify and streamline the integration process with [Fireguard](https://github.com/EOussama/fireguard) (A firebase middleman app). It offers a suite of helper methods and classes to manage configurations, events, and authentication in a more efficient and less error-prone way. This package is particularly useful for developers working with [Fireguard](https://github.com/EOussama/fireguard) authentication processes and event handling in web applications. Specifially ones under the manifest v3 restrictions.

## Features
* **Simplified Authentication**: The `FiremittHelper.auth` method abstracts the complexities of authentication, making it straightforward to implement.
* **Event Management**: Leverage `EventHelper` to send and receive custom events.
* **Dynamic Configuration**: `ConfigHelper` dynamically configures and validates settings for Fireguard integration.

## Installation
```sh
npm install firemitt
```

## Usage

### Authentication

The `FiremittHelper.auth` method is the cornerstone of the `Firemitt` package. It facilitates authentication by opening a new window and handling the authentication process, including success and error handling.

Here's a basic example of how to use it:

```ts
import { FiremittHelper } from 'firemitt';

const options = {
  // You can use either this or replace the URL with a self-hosted Fireguard instance.
  url: 'https://eoussama.github.io/fireguard',
  config: {
    name: 'My App Name',
    // Your web app's Firebase configuration
    firebase: {
      appId: '',
      apiKey: '',
      projectId: '',
      authDomain: '',
      measurementId: '',
      storageBucket: '',
      messagingSenderId: ''
    }
  }
};

FiremittHelper.auth(options)
  .then(token => {
    console.log('Authentication successful!', token);
  })
  .catch(error => {
    console.error('Authentication failed:', error);
  });
```

This method will open a new window pointing to the URL specified in the options. It listens for authentication success or failure events and resolves or rejects the promise accordingly.

> You can use the URL in the example above or place the URL for your self-hosted [Fireguard](https://github.com/EOussama/fireguard) instance.

### Configuration
Firemitt allows you to pass configurations that allows you to customize Fireguard further.

#### `TFiremittOptions`
| Property | Type | Description |
| -------- | ---- | ----------- |
| `url` | `string` | The URL of the Fireguard instance. |
| `pos` | `Partial<TPos>` | Optional, partial position configuration. |
| `dim` | `Partial<TDim>` | Optional, partial dimension configuration. |
| `config` | `Partial<TFireguardOptions>` | Optional, partial Fireguard configuration. |

#### `TDim`
| Property | Type | Description |
| -------- | ---- | ----------- |
| `width` | `number` | The width dimension of the popup window in pixels. |
| `height` | `number` | The height dimension of the popup window in pixels. |

#### `TPos`
| Property | Type | Description |
| -------- | ---- | ----------- |
| `x` | `number` | The x-coordinate of the popup window. |
| `y` | `number` | The y-coordinate of the popup window. |

#### `TFireguardOptions`
| Property | Type | Description |
| -------- | ---- | ----------- |
| `name` | `string` | The name of your application. |
| `firebase` | `TFirebaseConfig` | Your Firebase configuration. |
| `theme` | `Partial<TTheme>` | Optional theme settings. |

#### `TTheme`
| Property | Type | Description |
| -------- | ---- | ----------- |
| `text` | `string` | The color used for text elements. |
| `primary` | `string` | The primary color of the theme. |
| `secondary` | `string` | The secondary color of the theme. |

#### `TFirebaseConfig`
| Property | Type | Description |
| -------- | ---- | ----------- |
| `appId` | `string` | The unique identifier for the Firebase application. |
| `apiKey` | `string` | The API key used for authenticating requests from the app. |
| `projectId` | `string` | The globally unique identifier for the Firebase project. |
| `authDomain` | `string` | The domain used for Firebase Authentication. |
| `measurementId` | `string` | The identifier for Google Analytics for Firebase. |
| `storageBucket` | `string` | The Google Cloud Storage bucket for Firebase Storage. |
| `messagingSenderId` | `string` | The sender ID for Firebase Cloud Messaging. |

You can read more in details in the [docs](https://ouss.es/firemitt).

## Contributing

Contributions to Firemitt are always welcome. Please read our contributing guidelines and code of conduct before making a pull request.