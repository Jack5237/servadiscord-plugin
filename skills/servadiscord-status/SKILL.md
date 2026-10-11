---
name: servadiscord-status
description: Check or change a ServaDiscord bot — whether it is enabled, whether a token is configured, its activity status text — and request a restart.
---

1. `list_workspaces` (confirm if more than one), then `get_workspace`. Report: bot enabled, token configured, premium available.
2. If `botTokenConfigured` is false, stop and tell the user to add the token in the ServaDiscord dashboard. Never ask for or accept the token in chat.
3. `list_nodes`, find the `generalSettings` node, and `describe_node_type` for `generalSettings`.
4. Changes go through `update_node` on that node:
   - on/off: `botEnabled`
   - activity: `botStatusMode` (`disabled` | `fixed` | `rotating`), `botStatusType`, `botStatusText`, `botRotatingStatuses`
   - name/description: `botName`, `botDescription`
   - restart: set `restartRequestedAt` to the current time in milliseconds
5. Confirm what changed. The running bot picks it up from the workspace; Discord server structure is not changed from here.
