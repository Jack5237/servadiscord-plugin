#!/usr/bin/env node
// Prints sign-in and command hints to session context on startup.
process.stdout.write(
  "ServaDiscord plugin loaded.\n" +
  "First time? Run /mcp, pick servadiscord, and choose Authenticate to sign in in your browser.\n" +
  "Commands: /servadiscord:servadiscord-show · /servadiscord:servadiscord-add · /servadiscord:servadiscord-help · /servadiscord:servadiscord\n"
);
