# ServaDiscord MCP plugin

Manage your ServaDiscord workspace graph from any MCP-capable AI agent.

**MCP server:** `https://unique-bullfrog-891.convex.site/mcp` (OAuth2)

## Install

**Claude Code**
```
/plugin marketplace add Jack5237/servadiscord-plugin
/plugin install servadiscord@servadiscord
```
MCP only, no plugin: `claude mcp add --transport http servadiscord https://unique-bullfrog-891.convex.site/mcp`

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

## Sign in

1. Install the plugin (above).
2. **Claude Code:** run `/mcp`, select `servadiscord`, then **Authenticate**. Your browser opens the ServaDiscord sign-in page; approve access and return to the terminal.
   **Codex:** `codex mcp login servadiscord`. **Other clients:** they prompt on first tool use, or use the client's MCP "Authenticate / Login" action.
3. Try `/servadiscord:servadiscord-show`, or ask "List my ServaDiscord workspaces."

Don't have an account? Sign up at https://www.servadiscord.com first, then authenticate.

## Commands

After installing in Claude Code or Codex:

| Command | What it does |
|---------|-------------|
| `/servadiscord:servadiscord` | General workspace assistant |
| `/servadiscord:servadiscord-show` | Show current graph — all nodes, types, status |
| `/servadiscord:servadiscord-add` | Guided flow to add a new node |
| `/servadiscord:servadiscord-help` | List available node types and commands |
| `/servadiscord:servadiscord-setup` | Build a workspace for a new server from scratch |
| `/servadiscord:servadiscord-status` | Check or change bot on/off, activity status, restart |
| `/servadiscord:servadiscord-welcome` | Welcome and leave messages |
| `/servadiscord:servadiscord-moderation` | Warnings, auto-mod rules, punishments |
| `/servadiscord:servadiscord-tickets` | Support tickets or modmail |
| `/servadiscord:servadiscord-autoresponder` | Keyword reply rules |

## MCP tools

`list_workspaces` → `get_workspace` → `list_nodes` → `list_node_types` → `describe_node_type` → `add_node` / `update_node` / `toggle_node` / `remove_node`

Also: `create_workspace`, `rename_workspace`, `whoami`.

See `AGENTS.md` for the full tool reference.
