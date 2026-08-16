# ServaDiscord MCP

You are connected to a ServaDiscord workspace via MCP at `https://pastel-guanaco-198.convex.site/mcp`.

Always call `list_workspaces` first, then `list_nodes` to read the current graph, then `describe_node_type` before any write. Never request or store a bot token. Do not remove the root `GeneralSettingsNode`.
