<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerKemSBV2\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerKemSBV2/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerKemSBV2.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerKemSBV2\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerKemSBV2\App_KernelDevDebugContainer([
    'container.build_hash' => 'KemSBV2',
    'container.build_id' => 'f15971b1',
    'container.build_time' => 1749212250,
    'container.runtime_mode' => \in_array(\PHP_SAPI, ['cli', 'phpdbg', 'embed'], true) ? 'web=0' : 'web=1',
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerKemSBV2');
