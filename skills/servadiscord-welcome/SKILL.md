---
name: servadiscord-welcome
description: Configure welcome (and leave) messages for a ServaDiscord bot in plain English.
---

1. `list_workspaces`, `list_nodes`. If a `welcomeModule` node exists, update it; otherwise add one.
2. `describe_node_type` for `welcomeModule`.
3. Ask only for what is missing: channel, message text (offer a short friendly default using the server name), plain text or embed, and whether to send a leave message.
4. `update_node` or `add_node`, then show the user the final message text and channel.
