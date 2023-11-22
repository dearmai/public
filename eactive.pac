function FindProxyForURL(url, host) {    
  alert(`[PAC] host : ${host}`);
  alert(`[PAC] url : ${url}`);
  alert(`[PAC] ${host} = ${dnsResolve(host)}`);  
  
  if (shExpMatch(url, "192.168.10.*")) {
      return "SOCKS5 10.0.205.172:1080";
  }
  if (isInNet(host, "192.168.8.0", "255.255.252.0")) {
      return "SOCKS5 10.0.205.172:1080";
  }
  
  return "DIRECT";
}
