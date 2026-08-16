---
name: servadiscord
description: Manage a ServaDiscord workspace graph through MCP tools — list workspaces and nodes, add or update bot logic, toggle features on/off.
---

## Sequence

1. `list_workspaces` — identify the target workspace. If the user has more than one, confirm before mutating.
2. `list_nodes` — read the current graph state before making any changes.
3. `describe_node_type` — **required** before every `add_node` or `update_node`. Node schemas evolve; never guess field names or shapes.
4. Mutate: `add_node`, `update_node`, `toggle_node`, or `remove_node`.

## Tools quick-reference

| Tool | Required args | Notes |
|------|---------------|-------|
| `list_workspaces` | — | Returns `[{ _id, name }]` |
| `list_nodes` | `workspaceId` | Returns all nodes with `id`, `type`, `data`, `enabled` |
| `describe_node_type` | `type` | Returns JSON schema for that node's `data` field |
| `add_node` | `workspaceId`, `type`, `data` | Optional: `parentNodeId` |
| `update_node` | `workspaceId`, `nodeId`, `data` | Merges into existing data |
| `toggle_node` | `workspaceId`, `nodeId`, `enabled` | Boolean |
| `remove_node` | `workspaceId`, `nodeId` | Cannot remove the root `GeneralSettingsNode` |

## Hard rules

- Never request, log, or echo a bot token.
- `describe_node_type` before every write — no exceptions.
- Do not remove the root `GeneralSettingsNode`.
