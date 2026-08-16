# ServaDiscord MCP plugin

This package contains the Codex, Claude Code, and Gemini CLI installation manifests for the ServaDiscord MCP server.

For Codex, add this to `~/.codex/config.toml` and run `codex mcp login servadiscord`:

```toml
[mcp_servers.servadiscord]
url = "https://pastel-guanaco-198.convex.site/mcp"
```

The server must be deployed before any client can connect. This package is not a universal installer: it supports MCP-capable clients only.
