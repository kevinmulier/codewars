function ipToInt32(ip) {
    return ip.split('.')
             .map((octet) => parseInt(octet, 10))
             .reduce((int32, octet) => (int32 << 8) + octet) >>> 0;
}
