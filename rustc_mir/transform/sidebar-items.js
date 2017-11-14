initSidebarItems({"fn":[["default_name","Generates a default name for the pass based on the name of the type `T`."],["is_mir_available",""],["mir_built",""],["mir_const",""],["mir_keys","Finds the full set of def-ids within the current crate that have MIR associated with them."],["mir_validated",""],["optimized_mir",""],["provide",""]],"mod":[["add_call_guards",""],["add_validation","This pass adds validation calls (AcquireValid, ReleaseValid) where appropriate. It has to be run really early, before transformations like inlining, because introducing these calls adds UB -- so, conceptually, this pass is actually part of MIR building, and only after this pass we think of the program has having the normal MIR semantics."],["check_unsafety",""],["clean_end_regions","This module provides one pass, `CleanEndRegions`, that reduces the set of `EndRegion` statements in the MIR."],["copy_prop","Trivial copy propagation pass."],["deaggregator",""],["dump_mir","This pass just dumps MIR at a specified point."],["elaborate_drops",""],["erase_regions","This pass erases all early-bound regions from the types occurring in the MIR. We want to do this once just before trans, so trans does not have to take care erasing regions all over the place. NOTE:  We do NOT erase regions of statements that are relevant for \"types-as-contracts\"-validation, namely, AcquireValid, ReleaseValid, and EndRegion."],["generator","This is the implementation of the pass which transforms generators into state machines."],["inline","Inlining pass for MIR functions"],["instcombine","Performs various peephole optimizations."],["nll",""],["no_landing_pads","This pass removes the unwind branch of all the terminators when the no-landing-pads option is specified."],["promote_consts","A pass that promotes borrows of constant rvalues."],["qualify_consts","A pass that qualifies constness of temporaries in constants, static initializers and functions and also drives promotion."],["rustc_peek",""],["simplify","A number of passes which remove various redundancies in the CFG."],["simplify_branches","A pass that simplifies branches when their condition is known."],["type_check","This pass type-checks the MIR to ensure it is not broken."]],"struct":[["MirSource","Where a specific Mir comes from."]],"trait":[["MirPass","A streamlined trait that you can implement to create a pass; the pass will be named after the type, and it will consist of a main loop that goes over each available MIR and applies `run_pass`."]]});