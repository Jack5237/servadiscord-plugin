# ServaDiscord MCP plugin

Manage your ServaDiscord workspace graph from any MCP-capable AI agent.

**MCP server:** `https://unique-bullfrog-891.convex.site/mcp` (OAuth2)

## Install

**Claude Code**
```
/plugin marketplace add Jack5237/servadiscord-plugin
/plugin install servadiscord@servadiscord
```

**Codex** — add to `~/.codex/config.toml`:
```toml
[mcp_servers.servadiscord]
url = "https://unique-bullfrog-891.convex.site/mcp"
```
Then: `codex mcp login servadiscord`

**Cursor** — copy `.cursor/mcp.json` from this repo into your project root.

**Windsurf** — copy `.windsurf/mcp.json` and `.windsurf/rules/servadiscord.md` from this repo.

**Kiro** — copy `.kiro/mcp.json` and `.kiro/steering/servadiscord.md` from this repo.

**VS Code Copilot Chat** — copy `.vscode/mcp.json` and `.github/copilot-instructions.md` from this repo.

**Gemini CLI**
```bash
gemini extensions install github.com/Jack5237/servadiscord-plugin
```

**Cline / other Streamable-HTTP clients** — paste the server URL into your MCP settings:
```
https://unique-bullfrog-891.convex.site/mcp
```

All MCP configs use the same server URL. Clients that support OAuth2 resource discovery (RFC 9728) authenticate automatically.

## Commands

After installing in Claude Code or Codex:

| Command | What it does |
|---------|-------------|
| `/servadiscord:servadiscord` | General workspace assistant |
| `/servadiscord:servadiscord-show` | Show current graph — all nodes, types, status |
| `/servadiscord:servadiscord-add` | Guided flow to add a new node |
| `/servadiscord:servadiscord-help` | List available node types |

## MCP tools

`list_workspaces` → `list_nodes` → `describe_node_type` → `add_node` / `update_node` / `toggle_node` / `remove_node`

See `AGENTS.md` for the full tool reference.
