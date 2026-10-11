---
name: servadiscord
description: Manage a ServaDiscord workspace graph through MCP tools — create workspaces, add or update bot logic, toggle features, check bot status.
---

## Sequence

1. `list_workspaces` — identify the target workspace. If there is more than one, confirm before mutating. None yet? `create_workspace`.
2. `get_workspace` — role, bot on/off, whether a token is configured, and whether premium nodes are available. Read-only members cannot write.
3. `list_nodes` — read the current graph before changing anything.
4. `list_node_types` — pick the type. Each node type can exist **once** per workspace, so update an existing node instead of adding a second.
5. `describe_node_type` — **required** before every `add_node` or `update_node`. Never guess field names.
6. Mutate: `add_node`, `update_node`, `toggle_node`, `remove_node`.
7. `list_nodes` again and summarise what changed.

## Tools

| Tool | Required args | Notes |
|------|---------------|-------|
| `whoami` | — | Authenticated user ID |
| `list_workspaces` | — | Workspaces you can access, with role |
| `get_workspace` | `workspaceId` | Role, node count, bot enabled, token configured (never the token), premium available |
| `create_workspace` | `name` | `{ok:false, reason:"workspace_limit"}` on the free tier limit |
| `rename_workspace` | `workspaceId`, `name` | Owner only |
| `list_node_types` | — | Every type: description, addable, premium |
| `describe_node_type` | `type` | JSON Schema for the node's `data` |
| `list_nodes` | `workspaceId` | Nodes with `id`, `type`, `data` |
| `add_node` | `workspaceId`, `type`, `data` | Optional `parentNodeId` |
| `update_node` | `workspaceId`, `nodeId`, `data` | Partial merge into existing data |
| `toggle_node` | `workspaceId`, `nodeId`, `enabled` | Not for `generalSettings` |
| `remove_node` | `workspaceId`, `nodeId` | Root node cannot be removed |

## Hard rules

- Never request, log, or echo a bot token. If the user pastes one, tell them to enter it in the ServaDiscord dashboard instead.
- `describe_node_type` before every write.
- Never remove the root `generalSettings` node; change it with `update_node`.
- Premium types (`premium: true` in `list_node_types`) fail without a subscription: check `get_workspace.premium` and tell the user before trying.
- Changes are saved to the workspace but **not pushed to Discord** from here. Tell the user to apply them from the ServaDiscord dashboard.

## Related skills

`/servadiscord-setup`, `/servadiscord-add`, `/servadiscord-show`, `/servadiscord-help`, `/servadiscord-status`, `/servadiscord-welcome`, `/servadiscord-moderation`, `/servadiscord-tickets`, `/servadiscord-autoresponder`.
