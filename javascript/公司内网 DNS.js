function main(config) {
  config.dns['nameserver-policy']['geosite:cn,private'].unshift('172.23.128.2')
  config.dns['nameserver-policy']['geosite:cn,private'].unshift('172.23.128.1')
  return config;
}
