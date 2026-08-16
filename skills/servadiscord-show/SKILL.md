---
name: servadiscord-show
description: Show the current ServaDiscord workspace graph — list all nodes with their type, status, and key settings. Read-only.
---

1. Call `list_workspaces`. If multiple, ask the user which one.
2. Call `list_nodes` on the chosen workspace.
3. Present a clean summary grouped by node type: name, enabled/disabled status, and any key data fields (e.g. channel name, role name). No raw JSON.
