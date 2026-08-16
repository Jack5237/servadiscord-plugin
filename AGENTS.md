# ServaDiscord MCP

You are connected to a ServaDiscord workspace via MCP. Use the tools below to inspect and manage the user's Discord bot graph.

## Workflow

Always follow this sequence:

1. `list_workspaces` — find the target workspace. Confirm with the user before mutating if it is ambiguous.
2. `list_nodes` — inspect the current graph before adding or changing anything.
3. `describe_node_type` — fetch the schema for any node type before writing its `data` field. Use the returned schema exactly; never guess field names.
4. Mutate with `add_node`, `update_node`, `toggle_node`, or `remove_node`.

## Tools

| Tool | What it does |
|------|-------------|
| `list_workspaces` | List the caller's workspaces |
| `list_nodes` | List all nodes in a workspace graph |
| `describe_node_type` | Get the JSON schema for a node type's `data` field |
| `add_node` | Add a node to the graph |
| `update_node` | Merge new data into an existing node |
| `toggle_node` | Enable or disable a node |
| `remove_node` | Remove a node from the graph |

## Rules

- Never request, log, store, or echo a bot token.
- Call `describe_node_type` before every `add_node` or `update_node` — node schemas evolve.
- Confirm the target workspace before any mutation when the user has more than one.
- The root `GeneralSettingsNode` is locked — never remove or replace it.
