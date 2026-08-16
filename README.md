# ServaDiscord MCP plugin

This package connects MCP-capable agents to a ServaDiscord workspace graph using OAuth.

## Install

### Codex

For Codex, add this to `~/.codex/config.toml` and run `codex mcp login servadiscord`:

```toml
[mcp_servers.servadiscord]
url = "https://pastel-guanaco-198.convex.site/mcp"
```

### Claude Code

```text
/plugin marketplace add Jack5237/servadiscord-plugin
/plugin install servadiscord@servadiscord
```

### Gemini CLI

```bash
gemini extensions install github.com/Jack5237/servadiscord-plugin
```

Other Streamable-HTTP MCP clients can use `.mcp.json`. This supports MCP-capable clients only.
