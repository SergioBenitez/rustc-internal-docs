initSidebarItems({"enum":[["AdtKind",""],["AssociatedItemContainer",""],["AssociatedKind",""],["Attributes",""],["BorrowKind",""],["BoundRegion",""],["ClosureKind",""],["ExistentialPredicate",""],["InferTy",""],["InstanceDef",""],["IntVarValue",""],["LvaluePreference",""],["Predicate",""],["RegionKind","Representation of regions."],["TypeVariants","NB: If you change this, you'll probably want to change the corresponding AST structure in libsyntax/ast.rs as well."],["UpvarCapture","Information describing the capture of an upvar. This is computed during `typeck`, specifically by `regionck`."],["Variance",""],["VariantDiscr",""],["Visibility",""]],"fn":[["keep_local",""],["provide",""],["provide_extern",""]],"mod":[["_match",""],["adjustment",""],["binding",""],["cast",""],["error",""],["fast_reject",""],["fold","Generalized type folding mechanism. The setup is a bit convoluted but allows for convenient usage. Let T be an instance of some \"foldable type\" (one which implements `TypeFoldable`) and F be an instance of a \"folder\" (a type which implements `TypeFolder`). Then the setup is intended to be:"],["inhabitedness",""],["item_path",""],["layout",""],["maps",""],["outlives",""],["relate","Generalized type relating mechanism. A type relation R relates a pair of values (A, B). A and B are usually types or regions but can be other things. Examples of type relations are subtyping, type equality, etc."],["steal",""],["subst",""],["tls",""],["trait_def",""],["util","misc. type-system utilities too small to deserve their own file"],["walk","An iterator over the type substructure. WARNING: this does not keep track of the region depth."],["wf",""]],"struct":[["AdtDef","The definition of an abstract data type - a struct or enum."],["AdtFlags",""],["AssociatedItem",""],["Binder","Binder is a binder for higher-ranked lifetimes. It is part of the compiler's representation for things like `for<'a> Fn(&'a isize)` (which would be represented by the type `PolyTraitRef == Binder<TraitRef>`). Note that when we skolemize, instantiate, erase, or otherwise \"discharge\" these bound regions, we change the type from `Binder<T>` to just `T` (see e.g. `liberate_late_bound_regions`)."],["CReaderCacheKey",""],["ClosureSubsts","A closure can be modeled as a struct that looks like:"],["ClosureUpvar",""],["Const","Typed constant value."],["CrateAnalysis","The complete set of all analyses described in this module. This is produced by the driver and fed to trans and later passes."],["CrateInherentImpls","A map for the local crate mapping each type to a vector of its inherent impls. This is not meant to be used outside of coherence; rather, you should request the vector for a specific type via `tcx.inherent_impls(def_id)` so as to minimize your dependencies (constructing this map requires touching the entire crate)."],["CrateVariancesMap","The crate variances map is computed during typeck and contains the variance of every item in the local crate. You should not use it directly, because to do so will make your pass dependent on the HIR of every item in the local crate. Instead, use `tcx.variances_of()` to get the variance for a particular item."],["DebruijnIndex","A [De Bruijn index][dbi] is a standard means of representing regions (and perhaps later types) in a higher-ranked setting. In particular, imagine a type like this:"],["Destructor",""],["DtorckConstraint","A set of constraints that need to be satisfied in order for a type to be valid for destruction."],["EarlyBoundRegion",""],["EquatePredicate",""],["ExistentialProjection","A `ProjectionPredicate` for an `ExistentialTraitRef`."],["ExistentialTraitRef","An existential reference to a trait, where `Self` is erased. For example, the trait object `Trait<'a, 'b, X, Y>` is:"],["FieldDef",""],["FloatVid",""],["FnSig","Signature of a function type, which I have arbitrarily decided to use to refer to the input/output types."],["FreeRegion","A \"free\" region `fr` can be interpreted as \"some region at least as big as the scope `fr.scope`\"."],["GenSig",""],["GeneratorInterior","This describes the types that can be contained in a generator. It will be a type variable initially and unified in the last stages of typeck of a body. It contains a tuple of all the types that could end up on a generator frame. The state transformation MIR pass may only produce layouts which mention types in this tuple. Upvars are not counted here."],["GenericPredicates","Bounds on generics."],["Generics","Information about the formal type/lifetime parameters associated with an item or method. Analogous to hir::Generics."],["GlobalArenas","Internal storage"],["ImplHeader","The \"header\" of an impl is everything outside the body: a Self type, a trait ref (in the case of a trait impl), and a set of predicates (from the bounds/where clauses)."],["Instance",""],["InstantiatedPredicates","Represents the bounds declared on a particular set of type parameters.  Should eventually be generalized into a flag list of where clauses.  You can obtain a `InstantiatedPredicates` list from a `GenericPredicates` by using the `instantiate` method. Note that this method reflects an important semantic invariant of `InstantiatedPredicates`: while the `GenericPredicates` are expressed in terms of the bound type parameters of the impl/trait/whatever, an `InstantiatedPredicates` instance represented a set of bounds for some particular instantiation, meaning that the generic parameters have been substituted with their values."],["IntVid",""],["OutlivesPredicate",""],["ParamEnv","When type checking, we use the `ParamEnv` to track details about the set of where-clauses that are in scope at this particular point."],["ParamEnvAnd",""],["ParamTy",""],["ProjectionPredicate","This kind of predicate has no direct correspondent in the syntax, but it roughly corresponds to the syntactic forms:"],["ProjectionTy","Represents the projection of an associated type. In explicit UFCS form this would be written `<T as Trait<..>>::N`."],["RegionParameterDef",""],["RegionVid",""],["ReprFlags",""],["ReprOptions","Represents the repr options provided by the user,"],["Resolutions",""],["SkolemizedRegionVid",""],["Slice","A wrapper for slices with the additional invariant that the slice is interned and no other slice with the same contents can exist in the same context. This means we can use pointer + length for both equality comparisons and hashing."],["SubtypePredicate",""],["SymbolName",""],["TraitPredicate",""],["TraitRef","A complete reference to a trait. These take numerous guises in syntax, but perhaps the most recognizable form is in a where clause:"],["TyCtxt","The central data structure of the compiler. It stores references to the various arenas and also houses the results of the various compiler queries that have been performed. See the README for more deatils."],["TyS",""],["TyVid",""],["TypeAndMut",""],["TypeFlags",""],["TypeParameterDef",""],["TypeckTables",""],["UpvarBorrow",""],["UpvarId","Upvars do not get their own node-id. Instead, we use the pair of the original var id (that is, the root variable that is referenced by the upvar) and the id of the closure expression."],["VariantDef",""]],"trait":[["DefIdTree",""],["Lift","A trait implemented for all X<'a> types which can be safely and efficiently converted to X<'tcx> as long as they are part of the provided TyCtxt<'tcx>. This can be done, for example, for Ty<'tcx> or &'tcx Substs<'tcx> by looking them up in their respective interners."],["ToPolyTraitRef",""],["ToPredicate",""]],"type":[["PolyEquatePredicate",""],["PolyExistentialProjection",""],["PolyExistentialTraitRef",""],["PolyFnSig",""],["PolyGenSig",""],["PolyOutlivesPredicate",""],["PolyProjectionPredicate",""],["PolyRegionOutlivesPredicate",""],["PolySubtypePredicate",""],["PolyTraitPredicate",""],["PolyTraitRef",""],["PolyTypeOutlivesPredicate",""],["Region",""],["Ty",""],["UpvarCaptureMap",""]]});