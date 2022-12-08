import React from "react";
import { Window, TitleBar, Text } from "react-desktop/macOs";

const EnterLoadingFirstPage = () => {
  return (
    <Window
      chrome
      className="fixed left-12 top-20 terminal-size"
    >
      <TitleBar
        title="Command Terminal"
        controls
      />
      <Text>
        Last login: Thu Nov 17 16:38:46 on ttys000
        guestcomputer@Brand-New-Computer ~ %
        // Serial Port Initialization Device Driver
        initializeRS232(UART, BAUDRATE, DATA_BITS, STOP_BITS, PARITY);
        // Initialize Networking Device Driver
        initializeEthernet(IPAddress, Subnet, GatewayIP, ServerIP);
        //check for host development system for down loaded file of rest of code
        to RAM
        // through Ethernet
        // start executing rest of code (define memory map, load OS, etc.)
        // Disable interrupts
        __asm volatile ("cpsid i");
        // Disable Watchdog
        // SIM COPC register: COPT = 0,COPCLKS = 0,COPW = 0
        *((volatile unsigned int *)0x40048100) = 0x00u;
      </Text>
    </Window>
  )
}

export default EnterLoadingFirstPage