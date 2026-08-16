---
name: servadiscord-add
description: Guided flow to add a new node to a ServaDiscord workspace graph. Describe what you want in plain English and the agent picks the right node type and creates it.
---

1. Ask the user what they want to add if not already stated (e.g. "a welcome message", "a role reaction menu").
2. Call `list_workspaces`. If multiple, confirm the target.
3. Call `list_nodes` to read the current graph and avoid duplicates.
4. Pick the most appropriate node type. If unsure between two, ask.
5. Call `describe_node_type` for that type — never skip this step.
6. Fill in the node's `data` fields using the schema. Ask for any required fields you don't have.
7. Call `add_node`. Confirm success and show what was added.
