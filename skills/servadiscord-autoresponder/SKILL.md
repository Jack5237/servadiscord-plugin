---
name: servadiscord-autoresponder
description: Create or edit ServaDiscord autoresponder rules that reply to keywords.
---

1. `list_nodes`. Reuse the existing `autoresponder` node and add rules to it; `describe_node_type` for `autoresponder` first.
2. For each rule ask for: trigger words, match type (contains, exact, starts with, ends with), reply text, and whether it is scoped to certain channels or roles. Suggest a cooldown.
3. Keep existing rules: send the full updated rule list in `update_node`, not only the new rule.
4. Show the rules back as a short table.
