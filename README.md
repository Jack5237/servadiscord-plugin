# ServaDiscord MCP plugin

Manage your ServaDiscord workspace graph from any MCP-capable AI agent.

**MCP server:** `https://pastel-guanaco-198.convex.site/mcp` (OAuth2)

## Install

**Claude Code**
```
/plugin marketplace add Jack5237/servadiscord-plugin
/plugin install servadiscord@servadiscord
```

**Codex** — add to `~/.codex/config.toml`:
```toml
[mcp_servers.servadiscord]
url = "https://pastel-guanaco-198.convex.site/mcp"
```
Then: `codex mcp login servadiscord`

**Cursor / Windsurf / Kiro** — copy `.cursor/mcp.json`, `.windsurf/mcp.json`, or `.kiro/mcp.json` from this repo into your project root (all use the same format):
```json
{
  "mcpServers": {
    "servadiscord": {
      "url": "https://pastel-guanaco-198.convex.site/mcp"
    }
  }
}
```

**VS Code Copilot Chat** — copy `.vscode/mcp.json` from this repo into your project root:
```json
{
  "servers": {
    "servadiscord": {
      "type": "http",
      "url": "https://pastel-guanaco-198.convex.site/mcp"
    }
  }
}
```

**Gemini CLI**
```bash
gemini extensions install github.com/Jack5237/servadiscord-plugin
```

**Cline / other Streamable-HTTP clients** — paste the server URL into your MCP settings:
```
https://pastel-guanaco-198.convex.site/mcp
```

## Usage

Agents follow this sequence automatically:

1. `list_workspaces` — pick the target workspace
2. `list_nodes` — read the current graph
3. `describe_node_type` — get the schema before any write
4. `add_node` / `update_node` / `toggle_node` / `remove_node`

See `AGENTS.md` for the full tool reference.
