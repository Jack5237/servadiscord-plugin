# ServaDiscord MCP plugin

Connect MCP-capable AI agents to your ServaDiscord workspace graph. Inspect and manage nodes — channels, roles, bot logic, automations — without leaving your editor.

The MCP server is at `https://pastel-guanaco-198.convex.site/mcp` and uses OAuth2 for authentication.

## Install

### Claude Code

```
/plugin marketplace add Jack5237/servadiscord-plugin
/plugin install servadiscord@servadiscord
```

### Codex

Add to `~/.codex/config.toml`, then authenticate:

```toml
[mcp_servers.servadiscord]
url = "https://pastel-guanaco-198.convex.site/mcp"
```

```bash
codex mcp login servadiscord
```

### Cursor

Copy `.cursor/mcp.json` from this repo into your project root, or add the server to your global Cursor MCP settings:

```json
{
  "mcpServers": {
    "servadiscord": {
      "url": "https://pastel-guanaco-198.convex.site/mcp"
    }
  }
}
```

### Gemini CLI

```bash
gemini extensions install github.com/Jack5237/servadiscord-plugin
```

### Cline / other Streamable-HTTP clients

Add the MCP server URL directly in your client's MCP settings panel:

```
https://pastel-guanaco-198.convex.site/mcp
```

The server advertises OAuth2 via `/.well-known/oauth-protected-resource/mcp` — any client that follows RFC 9728 resource discovery will authenticate automatically.

## Usage

The agent always follows this sequence:

1. `list_workspaces` → pick the target workspace
2. `list_nodes` → read the current graph
3. `describe_node_type` → get the schema before any write
4. `add_node` / `update_node` / `toggle_node` / `remove_node`

See `AGENTS.md` for the full tool reference.
