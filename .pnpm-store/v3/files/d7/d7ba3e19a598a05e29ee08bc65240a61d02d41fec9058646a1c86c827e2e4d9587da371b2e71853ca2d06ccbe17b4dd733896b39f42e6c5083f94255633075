{
  "targets": [
    {
      "target_name": "ecdh",
      "include_dirs": ["<!(node -e \"require('nan')\")"],
      "cflags": ["-Wall", "-O2"],
      "sources": ["ecdh.cc"],
      "conditions": [
        ["OS=='win'", {
          "conditions": [
            [
              "target_arch=='x64'", {
                "variables": {
                  "openssl_root%": "C:/OpenSSL-Win64"
                },
              }, {
                "variables": {
                  "openssl_root%": "C:/OpenSSL-Win32"
                }
              }
            ]
          ],
          "libraries": [
            "-l<(openssl_root)/lib/libeay32.lib",
          ],
          "include_dirs": [
            "<(openssl_root)/include",
          ],
        }, {
          "conditions": [
            [
              "target_arch=='ia32'", {
                "variables": {
                  "openssl_config_path": "<(nodedir)/deps/openssl/config/piii"
                }
              }
            ],
            [
              "target_arch=='x64'", {
                "variables": {
                  "openssl_config_path": "<(nodedir)/deps/openssl/config/k8"
                },
              }
            ],
            [
              "target_arch=='arm'", {
                "variables": {
                  "openssl_config_path": "<(nodedir)/deps/openssl/config/arm"
                }
              }
            ],
            [
              "target_arch=='arm64'", {
                "variables": {
                  "openssl_config_path": "<(nodedir)/deps/openssl/config/aarch64"
                }
              }
            ],
          ],
          "include_dirs": [
            "<(nodedir)/deps/openssl/openssl/include",
            "<(openssl_config_path)"
          ]
        }
      ]]
    }
  ]
}
