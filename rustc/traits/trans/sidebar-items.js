initSidebarItems({"fn":[["trans_fulfill_obligation","Attempts to resolve an obligation to a vtable.. The result is a shallow vtable resolution -- meaning that we do not (necessarily) resolve all nested obligations on the impl. Note that type check should guarantee to us that all nested obligations could be resolved if we wanted to. Assumes that this is run after the entire crate has been successfully type-checked."]],"struct":[["ProjectionCache",""],["TraitSelectionCache",""],["TransTraitCaches","Specializes caches used in trans -- in particular, they assume all types are fully monomorphized and that free regions can be erased."]]});