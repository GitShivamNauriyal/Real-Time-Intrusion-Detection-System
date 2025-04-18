from scapy.all import IP, TCP

def check_xmas_scan(pkt, log_alert, tracker):
    """Detect Xmas scans where FIN, PSH, and URG flags are set (like a Christmas tree)."""
    if IP in pkt and TCP in pkt:
        src_ip = pkt[IP].src
        flags = pkt[TCP].flags
        # Xmas scan has FIN (0x01), PSH (0x08), URG (0x20) = 0x29
        if flags == 0x29:
            tracker.setdefault('xmas_scan', {})
            tracker['xmas_scan'].setdefault(src_ip, 0)
            tracker['xmas_scan'][src_ip] += 1
            if tracker['xmas_scan'][src_ip] > 5:
                log_alert(src_ip, tracker['xmas_scan'][src_ip], "Xmas Scan Detected")
                tracker['xmas_scan'][src_ip] = 0

def load_rules():
    return [check_xmas_scan]
