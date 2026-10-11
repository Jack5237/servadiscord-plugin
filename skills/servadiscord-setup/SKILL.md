---
name: servadiscord-setup
description: Set up a ServaDiscord workspace for a new Discord server from scratch — roles, channels, welcome message, moderation and extras — by interviewing the user and building the graph.
---

1. `list_workspaces`. No suitable workspace? Ask for a name and `create_workspace`. If it returns `workspace_limit`, say so and use the existing workspace.
2. `get_workspace` and `list_nodes` — see what already exists. Never duplicate a node type; update it.
3. Ask the user, in one message: what kind of server (gaming, community, support, creator…), roughly how many members, and which of these they want: welcome messages, moderation, tickets/modmail, autoresponder, stat channels, scheduled messages.
4. `list_node_types` and `get_workspace.premium`. Do not plan premium types the workspace cannot use; say which were left out.
5. Propose a plan: one line per node you will add. Wait for approval.
6. For each approved node: `describe_node_type`, then `add_node`, in this order: `rolesPermissions`, `channelStructure`, then the modules. Role and channel names a module refers to must already exist in those two nodes.
7. Finish with the `/servadiscord-show` summary and tell the user to apply the changes from the dashboard.
