---
name: servadiscord-tickets
description: Set up support tickets or modmail for a ServaDiscord bot.
---

1. `get_workspace` — `ticketsModule` is premium. If `premium` is false, say so and offer `modmailModule` instead.
2. `list_nodes` and `describe_node_type` for the chosen node. Update it if it exists.
3. Ask for the support role, the channel for the ticket panel, and the category where tickets open. Names must already exist in `rolesPermissions` / `channelStructure`; if not, offer to add them first.
4. `add_node` or `update_node`, then summarise how members open a ticket.
